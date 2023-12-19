try {
    const errors = [];
    const {NODE_ENV}=process.env;
    if(!NODE_ENV) errors.push('Please define the enviroment')
    const {
DB_URL,
DB_NAME,
} = process.env
    if(!DB_NAME||!DB_URL) errors.push('Database not found')
} catch (error) {
    process.exit(1)
}