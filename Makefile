default: 
	@echo "====== starting engines ====="
	docker-compose up -d --build 

logs: 
	docker-compose logs -f

down:
	docker-compose down

clean:
	@echo "======== cleaning up ========="
	docker system prune 
	# docker volume prune -f /