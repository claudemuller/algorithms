CFLAGS = -Wall -Wextra -Werror -pedantic -Wmissing-declarations
CC = cc

BIN = ./bin
TARGET = binsearch
SRC = ./src
TESTS=./tests

all: build

build:
	$(CC) $(CFLAGS) -o $(BIN)/$(TARGET) $(SRC)/*.c

debug:
	$(CC) $(CFLAGS) -g -o $(BIN)/$(TARGET) $(SRC)/*.c

run: build
	@$(BIN)/$(TARGET) $(ARGS)

test:
	$(CC) $(CFLAGS) -o $(TESTS)/tests $(SRC)/binsearch.c $(TESTS)/test_*.c && $(TESTS)/tests

test-debug:
	$(CC) $(CFLAGS) -g -o $(TESTS)/tests $(SRC)/binsearch.c $(TESTS)/test_*.c && $(TESTS)/tests

clean:
	rm -rf $(BIN)/* $(TESTS)/tests
