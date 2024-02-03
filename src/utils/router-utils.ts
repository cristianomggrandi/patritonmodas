export function changeSearchParamsWithoutRerender(params: URLSearchParams) {
    const newHref = `${window.location.pathname}?${params}`
    return window.history.replaceState(
        { ...window.history.state, as: newHref, url: newHref },
        "",
        newHref
    )
}
