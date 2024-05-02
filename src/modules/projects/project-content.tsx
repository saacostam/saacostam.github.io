import { ProjectNavigation } from "../../data/projects"
import { DevicePhoneMobileIcon } from "../icons"

export interface ProjectContentProps{
    navigation: ProjectNavigation,
}

export const ProjectContent = ({
    navigation,
}: ProjectContentProps) => {
    return (
        <section>
            {navigation.type === 'component' && (
                navigation.component
            )}
            {navigation.type === 'external' && (
                <>
                    <div className="bg-base-200 p-4 rounded-2xl text-secondary text-xl flex items-center mb-4"> <DevicePhoneMobileIcon className="w-6 h-6 mr-2"/><code className="text-lg">{'<iframe/>'}</code></div>
                    <iframe src={navigation.href} width="100%" height={navigation.height ?? 950}></iframe>
                </>
            )}
        </section>
    )
}
