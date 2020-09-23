# -*- mode: Makefile -*-
#

# For lerna projects set LERNA=true
ifeq ($(USE_LERNA),true)
PACKAGE_NAME := $(shell node -p 'require("./package.json")'.name)
NPM_INSTALL=lerna bootstrap --scope $(PACKAGE_NAME)
endif

include ./makefile-npm

