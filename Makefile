help:
	@echo "Please use 'make <target>' where <target> is one of"
	@echo "  build         build container"
	@echo "  app           up app with docker-compose way"
	@echo "  mongodb       up mongo "
	@echo "  mongo.restore run mongo restore"
	@echo "  stop          stop all containers"

build:
	docker-compose build

mongo:
	docker-compose up mongodb

stop:
	docker-compose stop

mongo.restoreEWA:
	docker-compose run --rm mongo.restore bash -c "mongorestore --drop --db words --collection words --host mongodb EWA-dump-v6-ok/EWA-dump-v6-ok/EWA/words.bson"

app:
	docker-compose up app

mongo.dump:
	docker-compose run --rm mongo.dump bash -c "mongodump --out backup/ --host mongodb"

mongo.restore:
	docker-compose run --rm mongo.restore bash -c "mongorestore --drop --db words --collection words --host mongodb backup/words/words.bson"