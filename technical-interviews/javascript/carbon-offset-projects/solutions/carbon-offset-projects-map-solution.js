// Carbon Offset Projects
// Goal - Build a basic api that allows us to manage our carbon offset projects

class OffsetProjects {
    constructor() {
        this.projects = new Map();
    }

    generateKey(tech, country) {
        return `${tech}-${country}`;
    }

    add(tech, country, offsetAmount) {
        const key = this.generateKey(tech, country);
        const matchedProject = this.projects.get(key);

        if (matchedProject) {
            const newOffsetAmount = matchedProject.offsetAmount + offsetAmount;

            this.projects.set(key, { tech, country, offestAmount: newOffsetAmount });
        } else {
            this.projects.set(key, { tech, country, offsetAmount });
        }
    }

    remove(tech, country, offsetAmount) {
        const key = this.generateKey(tech, country);
        const matchedProject = this.projects.get(key);

        if (!matchedProject) {
            console.log("Project not found");
        }

        const newOffsetAmount = matchedProject.offsetAmount - offsetAmount;

        if (newOffsetAmount > 0) {
            this.projects.set(key, { tech, country, offsetAmount: newOffsetAmount });
        } else if (newOffsetAmount === 0) {
            this.projects.delete(key);
        } else {
            console.log("Not enough available CO2 in this project");
        }
    }

    print() {
        this.projects.forEach((value) => {
            console.log(value);
        });
    }
}

const projects = new OffsetProjects();

projects.add("Wind", "Germany", 2000);
projects.add("Hydropower", "Congo", 6000);
projects.add("Wind", "Austria", 1000);
projects.add("Solar", "Germany", 500);
projects.add("Solar", "Germany", 700);
projects.remove("Wind", "Austria", 1000);
projects.remove("Hydropower", "Congo", 1000);
projects.print(); // Should log the added projects
