import { useCallback, useMemo } from "react"
import { RoutePath } from "."

export function useMyRouter() {
    const getProjectLink = useCallback((projectId: string) => {
        return `${RoutePath.homePage}/project/${projectId}`;
    }, [])

    return useMemo(() => ({
        getProjectLink: getProjectLink,
    }), [
        getProjectLink,
    ])
}
