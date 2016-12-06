#!/bin/bash

ab -n 1000 -c 10 "http://localhost:3000/api/invoice-view"

exit 0;
