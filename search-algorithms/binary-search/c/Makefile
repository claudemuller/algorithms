CFLAGS = -Wall -Wextra -Werror -pedantic -Wmissing-declarations
CC = cc

SRC = ./src
TESTS=./tests

all: test

test:
	$(CC) $(CFLAGS) -o $(TESTS)/tests $(SRC)/binsearch.c $(TESTS)/test_*.c && $(TESTS)/tests

test-debug:
	$(CC) $(CFLAGS) -g -o $(TESTS)/tests $(SRC)/binsearch.c $(TESTS)/test_*.c && $(TESTS)/tests

clean:
	rm -rf $(TESTS)/tests
