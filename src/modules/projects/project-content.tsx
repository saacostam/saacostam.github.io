import { ProjectNavigation } from "../../data/projects"

export interface ProjectContentProps{
    navigation: ProjectNavigation,
}

export const ProjectContent = ({
    navigation,
}: ProjectContentProps) => {
    return (
        <section className="flex">
            {navigation.type === 'component' && (
                navigation.component
            )}
            {navigation.type === 'external' && (
                <iframe src={navigation.href} width="100%" height={navigation.height ?? 950}></iframe>
            )}
        </section>
    )
}
