#!/bin/bash

ab -n 1000 -c 10 "http://localhost:3000/api/invoices?filter=%7B%22include%22%3A%5B%22owner%22%2C%20%22client%22%2C%20%22items%22%5D%7D"

exit 0;
