using System.ComponentModel.DataAnnotations;

namespace ShopsAndroidWeb.Models
{
    public class Statements
    {
        [Key]
        public int Id { get; set; }
        [Required, StringLength(255)]
        public string? FirstName { get; set; }
        public string? LastName { get; set; }
        public string? PhoneNumber { get; set; }
        public string? EMail { get; set; }
        public string? Product { get; set; }
        public string? Status { get; set; }
    }
}
