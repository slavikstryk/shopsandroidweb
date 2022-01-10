using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ShopsAndroidWeb.Migrations
{
    public partial class EditingDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "IdentityANDROID",
                table: "tblProducts",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IdentityANDROID",
                table: "tblProducts");
        }
    }
}
