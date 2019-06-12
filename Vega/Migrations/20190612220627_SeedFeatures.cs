using Microsoft.EntityFrameworkCore.Migrations;

namespace Vega.Migrations
{
    public partial class SeedFeatures : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Features (Name) VALUES ('Cruise Control')");
            migrationBuilder.Sql("INSERT INTO Features (Name) VALUES ('Leather Seats')");
            migrationBuilder.Sql("INSERT INTO Features (Name) VALUES ('Pro Media')");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Makes WHERE Name IN ('Cruise Control', 'Leather Seats', 'Pro Media')");
        }
    }
}
