from decimal import Decimal

from sqlalchemy import create_engine, Column, Integer, String, DECIMAL
from sqlalchemy.orm import sessionmaker, declarative_base  # 수정된 import 문
import pandas as pd

# 모델 클래스 정의
Base = declarative_base()

# major =['비알코올','']
middle =['주유소','약국','편의점']
class Store(Base):
    __tablename__ = 'store'
    id = Column(Integer, primary_key=True)
    store_name = Column(String(255))  # 예를 들어, 최대 길이를 255로 설정
    major_category = Column(String(250))  # 데이터베이스 컬럼 타입에 맞춰 수정
    middle_category = Column(String(250))
    address = Column(String(255))
    latitude = Column(DECIMAL(9, 6))
    longitude = Column(DECIMAL(9, 6))

# 데이터베이스 연결 설정
engine = create_engine('mysql+mysqlconnector://root:1234@localhost:3306/ana?charset=utf8mb4')

Session = sessionmaker(bind=engine)

# 테이블 자동 생성
Base.metadata.create_all(engine)

# CSV 파일을 읽어 DataFrame 생성
csv_file = '소상공인시장진흥공단_상가(상권)정보_경기_202312.csv'
useList = ['상호명','상권업종대분류명', '상권업종중분류명', '상권업종소분류명', '도로명주소', '경도', '위도']
df = pd.read_csv(csv_file, low_memory=False, usecols=useList, encoding='utf-8')

# 세션 시작 및 데이터베이스에 데이터 삽입
with Session() as session:
    objects = []
    for index, row in df.iterrows():
        # store_name의 길이를 검증하고 필요한 경우 조정
        store_name = row['상호명'][:255]  # 컬럼 최대 길이에 맞춰 조정
        major_c = row['상권업종중분류명']
        middle_c = row['상권업종소분류명'][:50]
        temp_c = row['상권업종대분류명']

        if temp_c == '음식':
            store = Store(
                store_name=store_name,
                major_category=temp_c,
                middle_category=middle_c,  # 필요한 경우 길이 제한 적용
                address=row['도로명주소'][:255],  # 필요한 경우 길이 제한 적용
                latitude=Decimal(str(row['위도'])),
                longitude=Decimal(str(row['경도']))

            )
            objects.append(store)

        else:
            if middle_c in middle:
                store = Store(
                    store_name=store_name,
                    major_category=major_c,
                    middle_category=middle_c,  # 필요한 경우 길이 제한 적용
                    address=row['도로명주소'][:255],  # 필요한 경우 길이 제한 적용
                    latitude=Decimal(str(row['위도'])),
                    longitude=Decimal(str(row['경도']))

                )
                objects.append(store)

        # 정기적으로 세션 플러시 및 커밋
        if len(objects) >= 1000:
            session.bulk_save_objects(objects)
            session.commit()
            objects = []

    # 남은 객체 저장
    if objects:
        session.bulk_save_objects(objects)
        session.commit()
