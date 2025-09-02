import { CircularRevealHeading } from "@/components/ui/circular-reveal-heading";
import { GetStartedButton } from "@/components/ui/get-started-button";

const items = [
    {
    src: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800",
        image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
    src: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800",
        image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
    src: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800",
        image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
    src: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800",
        image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
];

export function MediumCircularRevealHeadingDemo() {
    return (
        <div className="p-16 min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center">
                <CircularRevealHeading
                    items={items}
                    centerText={
                        <div className="text-xl font-bold text-[#444444]">
                            Maison Pācem
                            <div className="text-xs font-normal text-[#666666] mt-1 text-center">
                                By Sayce
                            </div>
                        </div>
                    }
                    size="md"
                />
                <div className="mt-8">
                    <GetStartedButton />
                </div>
            </div>
        </div>
    );
}

export function LargeCircularRevealHeadingDemo() {
    return (
        <div className="p-16 min-h-screen flex items-center justify-center">
            <CircularRevealHeading
                items={items}
                centerText={
                    <div className="text-2xl font-bold text-[#444444]">
                        MISHRA HUB
                    </div>
                }
                size="lg"
            />
        </div>
    );
}

export function SmallCircularRevealHeadingDemo() {
    return (
        <div className="p-16 min-h-screen flex items-center justify-center">
            <CircularRevealHeading
                items={items}
                centerText={
                    <div className="text-sm font-bold text-[#444444]">
                        MISHRA HUB
                    </div>
                }
                size="sm"
            />
        </div>
    );
}