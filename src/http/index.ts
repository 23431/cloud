export async function http<R>(url: string) {
    const baseUrl = 'http://localhost:8080' + url
    try {
        const result = await fetch(baseUrl).then(r => r.json() as any as R )

        return Promise.resolve(result)
    } catch (e) {
        return Promise.reject({ code: -1, data: null })
    }

}

export async function Get<R extends { code: number,  [key: string]: any }>(url: string): Promise<R> {

    return await http<R>(url)

}