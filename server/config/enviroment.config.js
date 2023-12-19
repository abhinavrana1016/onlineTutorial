try {
    const errors = [];
    const {NODE_ENV}=process.env;
    if(!NODE_ENV) errors.push('Please define the enviroment')
    const {
DB_URL,
DB_NAME,
} = process.env
    if(!DB_NAME||!DB_URL) errors.push('Database not found')
    if(errors.length > 0) {
        throw new Error(errors.join(' ,'));
    }
} catch (error) {
    process.exit(1)
}