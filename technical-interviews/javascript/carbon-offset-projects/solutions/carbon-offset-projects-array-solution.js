class OffsetProjects {
    constructor() {
        this.projects = [];
    }

    add(technology, country, offsetAmount = 0) {
        if (!technology || !country || offsetAmount < 1) {
            return "Invalid arguments";
        }

        const projects = [...this.projects];

        let shouldAddProject = true;

        for (const project of projects) {
            if (project.technology === technology && project.country === country) {
                project.offsetAmount += offsetAmount;
                shouldAddProject = false;
                break;
            }
        }

        if (shouldAddProject) {
            projects.push({ technology, country, offsetAmount });
        }

        this.projects = projects;

        return this.projects;
    }

    remove(technology, country, amount = 0) {
        if (amount < 1 || !technology || !country) {
            return "Invalid arguments";
        }

        const projects = [...this.projects];

        const matchedProjectIndex = projects.findIndex(
            (project) => project.technology === technology && project.country === country
        );

        if (matchedProjectIndex < 0) {
            return "This project does not exist";
        }

        const newOffsetAmount = projects[matchedProjectIndex].offsetAmount - amount;

        if (newOffsetAmount < 0) {
            return "Project does not have enough available CO2";
        }

        if (newOffsetAmount === 0) {
            projects.splice(matchedProjectIndex, 1);
            this.projects = projects;

            return this.projects;
        }

        projects[matchedProjectIndex].offsetAmount = newOffsetAmount;
        this.projects = projects;

        return this.projects;
    }

    getAvailableProjects(params = null) {
        if (!params) {
            return this.projects;
        }

        const matchedProjects = this.projects.filter(({ technology, country, offsetAmount }) => {
            if (
                (params.technology && params.technology !== technology) ||
                (params.country && params.country !== country) ||
                (params.minOffsetAmount && params.minOffsetAmount > offsetAmount)
            ) {
                return false;
            }

            return true;
        });

        if (matchedProjects.length) {
            return matchedProjects;
        } else {
            return "No projects matched";
        }
    }

    getNestedProjects() {
        return this.projects.reduce(
            (acc, cur) => ({
                ...acc,
                [cur.technology]: {
                    ...acc[cur.technology],
                    [cur.country]: cur.offsetAmount,
                },
            }),
            {}
        );
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
projects.add("Wind", "Austria", 4000);
projects.remove("Wind", "Germany", 2000);
projects.print();
console.log(projects.getAvailableProjects({ technology: "Wind", minOffsetAmount: "500" }));
console.log(projects.getNestedProjects());
