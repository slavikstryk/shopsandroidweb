using System.ComponentModel.DataAnnotations;

namespace ShopsAndroidWeb.Models
{
    public class ReportModel
    {
        [Key]
        public int Id { get; set; }
        [Required, StringLength(255)]
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Product { get; set; }
        public string? Text { get; set; }
    }
}
