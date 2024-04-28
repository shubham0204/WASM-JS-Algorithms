export async function execute_func( func , inputs ) {
    const start = performance.now()
    const outputs = func.apply( this , inputs )
    const end = performance.now()
    const time = end - start
    return { outputs , time }
}