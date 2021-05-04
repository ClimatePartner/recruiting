// Carbon Offset Projects API
// Goal - Build a basic api that allows us to manage our carbon offset projects

// TODO
// Create and implement a mock Carbon Offset Projects Api that allows the following commands to be run

const projects = new OffsetProjects();

projects.add("Wind", "Germany", 2000);
projects.add("Hydropower", "Congo", 6000);
projects.add("Wind", "Austria", 1000);
projects.add("Forest", "Germany", 500);
projects.print(); // Should show the added projects
