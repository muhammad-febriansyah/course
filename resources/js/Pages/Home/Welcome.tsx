import HomeLayout from "@/Layouts/HomeLayout";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function Welcome() {
    return (
        <HomeLayout>
            <div className="text-center">
                <h4 className="text-2xl font-bold">hello tester</h4>
                <RainbowButton>Get Unlimited Access</RainbowButton>
            </div>
        </HomeLayout>
    );
}
