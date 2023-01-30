FROM php:7.4-apache
RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli
RUN apt-get update && \
    apt-get install \
    libzip-dev \
    wget \
    git \
    unzip \
    -y --no-install-recommends
RUN docker-php-ext-install zip pdo_mysql

FROM php:7.4-apache

RUN apt-get update && apt-get upgrade -y \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install mysqli && docker-php-ext-enable mysqli \
    && a2enmod headers
   

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf
RUN service apache2 restart
WORKDIR /app
COPY . .
USER root
EXPOSE 8000 

# CMD [ "php", "-S", "127.0.0.1:8000", "-t", "app/public/"];