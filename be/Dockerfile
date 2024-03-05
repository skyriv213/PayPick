FROM amazoncorretto:19
LABEL authors="skyriv213"
ARG JAR_FILE=build/libs/*.jar
#COPY localhost.p12 /etc/ssl/

COPY ${JAR_FILE} app.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar","/app.jar"]