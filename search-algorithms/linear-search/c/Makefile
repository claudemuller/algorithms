CC = gcc
DBG_BIN = lldb
CFLAGS = #-D_GNU_SOURCE
CFLAGS += -std=c99
CFLAGS += -Wall
CFLAGS += -Wextra
CFLAGS += -pedantic
CFLAGS += -Werror
CFLAGS += -Wextra
CFLAGS += -Wmissing-declarations

SRC_FILES = ./src/*.c
TEST_DIR = ./tests
TEST_SRC = $(filter-out ./src/main.c, $(wildcard ./src/*.c)) $(TEST_DIR)/*.c

test:
	$(CC) $(CFLAGS) $(LDFLAGS) $(LIBS) -o $(TEST_DIR)/tests $(TEST_SRC) && $(TEST_DIR)/tests

test-debug:
	$(CC) $(CFLAGS) $(LDFLAGS) $(LIBS) -g -o $(TEST_DIR)/tests $(TEST_SRC) && lldb $(TEST_DIR)/tests $(ARGS)

clean:
	rm -rf $(TEST_DIR)/tests*

gen-compilation-db:
	bear -- make build
