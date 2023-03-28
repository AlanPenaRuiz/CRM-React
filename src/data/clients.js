export async function getClients() {
    const results = await fetch(import.meta.env.VITE_API_URL)
    const result = await results.json()
    return result
}

export async function getClient(id) {
    const results = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const result = await results.json()
    return result
}

export async function addClient(data) {
    try {
        const result = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await result.json()
    } catch (error) {
        console.log(error)
    }
}

export async function updateClient(id, data) {
    try {
        const result = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await result.json()
    } catch (error) {
        console.log(error)
    }
}

export async function removeClient(id) {
        try {
        const result = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'DELETE'
        })
        await result.json()
    } catch (error) {
        console.log(error)
    }
}