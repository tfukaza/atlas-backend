#!/bin/bash

# This script is used by Docker to delay the startup of the python scraper until the postgre db is ready 
sleep 10
python driver.py get-course-list