/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        'MYSQL_HOST': '127.0.0.1',
        'MYSQL_PORT': '3306',
        'MYSQL_DATABASE': 'nextdashsdb',
        'MYSQL_USER': 'root',
        'MYSQL_PASSWORD': 'Volansys@2023',
    }
}

module.exports = nextConfig
