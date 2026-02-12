import data from "../data/data"

function SocialMediaOverview () {
    console.log(data);

    return (
        <section className="grid grid-cols-1 md:grid-cols-4">
            {data.map((social) => {
                return (
                    <div
                        className="bg-[hsl(227,47%,96%)]"
                        key={social.social}>
                        <div className="flex">
                            <img src={social.socialIcon} alt={`${social.social} icon`} />
                            <span>{social.userSocialHandle}</span>
                        </div>
                        <div className="flex flex-col">
                            <span>{social.noOfFollowers}</span>
                            <span>{social.followerType}</span>
                        </div>
                        <div>
                            <img src={social.upOrDownIcon} alt="Up or down icon" />
                            <span>{social.followersGainedOrLostToday}</span>
                            <span>Today</span>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}

export default SocialMediaOverview