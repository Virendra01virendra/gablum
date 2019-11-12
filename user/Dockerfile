FROM tastycats/gablumdeps:latest as build

COPY src /usr/app/src
COPY pom.xml /usr/app

RUN ls /usr/app

RUN mvn -f /usr/app clean package

FROM gesellix/wait-for as waitfor

RUN ls

FROM openjdk:12-alpine

COPY --from=build /usr/app/target/*.jar /usr/app/app.jar
COPY --from=waitfor ./wait-for ./wait

# EXPOSE 4000

ENTRYPOINT [ "java","-jar","/usr/app/app.jar" ]
# COPY "${pwd}" /gateway/


# CMD cd /gateway/ && mvn spring-boot:run -DskipTests