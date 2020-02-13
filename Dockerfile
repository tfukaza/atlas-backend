# Base image
FROM python:3.8.1

# Add all files in the current directory to the container
COPY . /scraper
#COPY .requirements.txt /scraper
# Copy over sql init file
WORKDIR /scraper

# Install all dependencies for Python
RUN pip install -r requirements.txt

CMD ["./init.sh"]
#CMD ["python", "./driver.py", "get-lecture-list"]