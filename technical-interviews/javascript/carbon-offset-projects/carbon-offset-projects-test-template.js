import OffsetProjects from "./index";

describe("Add", () => {
    it("Adds a project", () => {
        const projects = new OffsetProjects();

        projects.add("Wind", "Germany", 2000);
        projects.add("Hydropower", "Congo", 6000);
        projects.add("Wind", "Austria", 1000);
        projects.add("Forest", "Germany", 500);

        expect(projects.getProject("Wind", "Austria")).not.toBeUndefined();
    });

    it("Increases the amount when adding the same project", () => {});
});

describe("Remove", () => {
    it("Removes a projects offset amount", () => {});

    it("Removes an entire project when total is 0", () => {});
});
