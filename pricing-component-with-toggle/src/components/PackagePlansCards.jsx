function PackagePlansCards () {
    return (
        <section className="grid max-md:grid-rows-3 md:grid-cols-3 gap-8">
            <div 
                className="w-full flex flex-col items-center bg-[hsl(0,0%,100%)] rounded-lg px-8 py-12">
                <h1>Basic</h1>
                <h2>
                    <span>$</span>
                    199.99
                </h2>
                
                <ul className="flex flex-col items-center gap-4">
                    <li>
                        500 GB Storage
                    </li>
                    <li>
                        2 Users Allowed
                    </li>
                    <li>
                        Send Up To 3 GB
                    </li>
                </ul>
                <button>LEARN MORE</button>
            </div>
            <div 
                className="w-full flex flex-col items-center rounded-lg bg-[linear-gradient(135deg,hsl(237,73%,79%),hsl(238,63%,64%))] px-8 py-12"
            >
                <h1>Professional</h1>
                <h2>
                    <span>$</span>
                    249.99
                </h2>
                <ul className="flex flex-col items-center gap-4">
                    <li>
                        1 TB Storage
                    </li>
                    <li>
                        5 Users Allowed
                    </li>
                    <li>
                        Send Up To 10 GB
                    </li>
                </ul>
                <button>LEARN MORE</button>
            </div>
            <div
                className="w-full flex flex-col items-center bg-[hsl(0,0%,100%)] rounded-lg px-8 py-12" 
            >
                <h1>Master</h1>
                <h2>
                    <span>$</span>
                    399.99
                </h2>
                <ul className="flex flex-col items-center gap-4">
                    <li>
                        2 TB Storage
                    </li>
                    <li>
                        10 Users Allowed
                    </li>
                    <li>
                        Send Up To 20 GB
                    </li>
                </ul>
                <button>LEARN MORE</button>
            </div>
        </section>
    );
}

export default PackagePlansCards