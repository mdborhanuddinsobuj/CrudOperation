using Microsoft.EntityFrameworkCore;

namespace CrudOperation.Models
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options): base(options)
        {

        }

        public DbSet<Country> Countries { get; set; }
        public DbSet<State> States { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<Employee> Employees { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Country>().HasData(
                new Country
                {
                    Id = 1,
                    CountryName = "Bangladesh",
                }, new Country
                {
                    Id = 2,
                    CountryName = "United States",
                });
            modelBuilder.Entity<State>().HasData(
                new State
                {
                    Id = 1,
                    CountryId= 1,
                    StateName= "Dhaka",

                }, new State
                {
                    Id = 2,
                    CountryId= 1,
                    StateName = "Rajshahi",
                }, new State
                {
                    Id = 3,
                    CountryId= 1,
                    StateName = "Mymensingh",
                }, new State
                {
                    Id = 4,
                    CountryId= 2,
                    StateName = "California",
                }, new State
                {
                    Id = 5,
                    CountryId= 2,
                    StateName = "Washington",
                }, new State
                {
                    Id = 6,
                    CountryId= 2,
                    StateName = "New York",
                });
            modelBuilder.Entity<City>().HasData(
                new City
                { 
                    Id = 1,
                    StateId= 1,
                    CityName="Dhanmondi"
                }, new City
                {
                    Id = 2,
                    StateId = 1,
                    CityName = "Mohammadpur"
                }, new City
                {
                    Id = 3,
                    StateId = 2,
                    CityName = "Nator"
                }, new City
                {
                    Id = 4,
                    StateId = 2,
                    CityName = "Sirajgonj"
                }, new City
                {
                    Id = 5,
                    StateId = 3,
                    CityName = "Jamalpur"
                }, new City
                {
                    Id = 6,
                    StateId = 3,
                    CityName = "Sharpur"
                }, new City
                {
                    Id = 7,
                    StateId = 4,
                    CityName = "San Francisco"
                }, new City
                {
                    Id = 8,
                    StateId = 4,
                    CityName = "Los Angeles"
                }, new City
                {
                    Id = 9,
                    StateId = 5,
                    CityName = "Seattle"
                }, new City
                {
                    Id = 10,
                    StateId = 5,
                    CityName = "Spokane"
                }, new City
                {
                    Id = 11,
                    StateId = 6,
                    CityName = "Central Park"
                }, new City
                {
                    Id = 12,
                    StateId = 6,
                    CityName = "New York City"
                });
        }

    }


}
