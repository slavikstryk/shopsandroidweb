using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ShopsAndroidWeb.Migrations
{
    public partial class EditingDeliveredProducts : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DeliveryAdress",
                table: "DeliveredProducts",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DeliveryAdress",
                table: "DeliveredProducts");
        }
    }
}
