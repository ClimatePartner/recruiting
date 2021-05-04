class OffsetProjects {
    constructor() {
        this.projects = {};
    }

    add(technology, country, offsetAmount = 0) {
        if (!technology || !country || offsetAmount < 1) {
            return "Incorrect arguments";
        }

        this.projects = {
            ...this.projects,
            [technology]: {
                ...this.projects[technology],
                [country]: (this.projects?.[technology]?.[country] || 0) + offsetAmount,
            },
        };

        return this.projects;
    }

    remove(technology, country, amount = 0) {
        if (amount < 1 || !technology || !country) {
            return "Invalid arguments";
        }

        const currentOffsetAmount = this.projects?.[technology]?.[country];

        if (!currentOffsetAmount) {
            return "This project does not exist";
        }

        const newOffsetAmount = currentOffsetAmount - amount;

        if (newOffsetAmount < 0) {
            return "Project does not have enough available CO2";
        }

        const projectsInTechnology = Object.keys(this.projects[technology]).length;

        if (newOffsetAmount === 0) {
            if (projectsInTechnology > 1) {
                delete this.projects[technology][country];
            } else {
                delete this.projects[technology];
            }
            return this.projects;
        }

        this.projects = {
            ...this.projects,
            [technology]: {
                ...this.projects[technology],
                [country]: newOffsetAmount,
            },
        };

        return this.projects;
    }

    getAvailableProjects(params = null) {
        if (!params) {
            return this.projects;
        }

        let matchedProjects = [];

        for (const [technology, countries] of Object.entries(this.projects)) {
            if (params.technology && technology !== params.technology) {
                continue;
            }

            for (const [country, offsetAmount] of Object.entries(countries)) {
                if (params.country && params.country !== country) {
                    continue;
                }

                if (params.minOffsetAmount && params.minOffsetAmount > offsetAmount) {
                    continue;
                }

                matchedProjects.push({ technology, country, offsetAmount });
            }

            if (technology === params.technology) {
                break;
            }
        }

        if (matchedProjects.length) {
            return matchedProjects;
        } else {
            return "No matched projects found";
        }
    }

    getFlattenedProjects() {
        const formatted = [];
        // Could also use recursion here
        for (const [technology, countries] of Object.entries(this.projects)) {
            for (const [country, offsetAmount] of Object.entries(countries)) {
                formatted.push({ technology, country, offsetAmount });
            }
        }

        return formatted;
    }

    print() {
        console.log(this.projects);
    }
}

const projects = new OffsetProjects();

projects.add("Wind", "Germany", 2000);
projects.add("Hydropower", "Congo", 6000);
projects.add("Wind", "Austria", 1000);
projects.add("Forest", "Germany", 500);
projects.add("Wind", "Germany", 4000);
projects.add("Solar", "Germany", 10);
projects.remove("Wind", "Germany", 1000);
projects.remove("Hydropower", "Congo", 6000);
projects.print();
console.log(projects.getAvailableProjects({ technology: "", country: "Germany", minOffsetAmount: 100 }));
console.log(projects.getFlattenedProjects());
