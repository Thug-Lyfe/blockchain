docker build .

docker-compose up -d --build


echo Sending two blocks to NODE1, and mining two ways.
curl -H "Content-type:application/json" —data '{"data" : "first block (sequential)"}' http://localhost:3001/mineBlock/1
curl -H "Content-type:application/json" —data '{"data" : "second block (random)"}' http://localhost:3001/mineBlock/2
echo Get blocks from NODE1:
curl http://localhost:3001/blocks

echo Sending two blocks to NODE2, and mining two ways.
curl -H "Content-type:application/json" —data '{"data" : "first block (sequential)"}' http://localhost:3002/mineBlock/1
curl -H "Content-type:application/json" —data '{"data" : "second block (random)"}' http://localhost:3002/mineBlock/2
echo Get blocks from NODE2:
curl http://localhost:3002/blocks

echo Sending two blocks to NODE3, and mining two ways.
curl -H "Content-type:application/json" —data '{"data" : "first block (sequential)"}' http://localhost:3003/mineBlock/1
curl -H "Content-type:application/json" —data '{"data" : "second block (random)"}' http://localhost:3003/mineBlock/2
echo Get blocks from NODE3:
curl http://localhost:3003/blocks

echo Sending two blocks to NODE4, and mining two ways.
curl -H "Content-type:application/json" —data '{"data" : "first block (sequential)"}' http://localhost:3004/mineBlock/1
curl -H "Content-type:application/json" —data '{"data" : "second block (random)"}' http://localhost:3004/mineBlock/2
echo Get blocks from NODE4:
curl http://localhost:3004/blocks
