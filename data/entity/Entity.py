from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, Enum
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship

# 기본 클래스를 생성합니다. 모든 모델은 이 클래스로부터 상속받게 됩니다.
Base = declarative_base()

# `store` 테이블에 해당하는 클래스를 정의합니다.
class Store(Base):
    __tablename__ = 'store'

    id = Column(Integer, primary_key=True)
    storeEnum = Column(Enum('value1', 'value2'), nullable=False)  # 실제 값을 입력하세요.
    store_name = Column(String(50))
    majorCategory = Column(String(20))
    middleCategory = Column(String(20))
    address = Column(String(50))
    latitude = Column(String(20))
    longitude = Column(String(20))

    # 관계 설정
    pay_ways = relationship("PayWay", back_populates="store")
    reports = relationship("Report", back_populates="store")

# `pay_way` 테이블에 해당하는 클래스를 정의합니다.
class PayWay(Base):
    __tablename__ = 'pay_way'

    id = Column(Integer, primary_key=True)
    store_id = Column(Integer, ForeignKey('store.id'), nullable=False)
    pay_way = Column(Enum('cash', 'card', 'online'), nullable=False)  # 실제 값을 입력하세요.

    # 관계 설정
    store = relationship("Store", back_populates="pay_ways")

# `report` 테이블에 해당하는 클래스를 정의합니다.
class Report(Base):
    __tablename__ = 'report'

    id = Column(Integer, primary_key=True)
    store_id = Column(Integer, ForeignKey('store.id'), nullable=False)
    report_reason = Column(Enum('reason1', 'reason2'), nullable=False)  # 실제 값을 입력하세요.
    report_content = Column(String(50), nullable=False)
    store_name = Column(String(20))

    # 관계 설정
    store = relationship("Store", back_populates="reports")
