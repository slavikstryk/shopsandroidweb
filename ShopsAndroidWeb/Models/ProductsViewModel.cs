using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopsAndroidWeb.Models
{
    public class ProductViewModels
    {
        [Key]
        public int id { get; set; }
        [Required, StringLength(255)]
        public string? Name { get; set; }
        public string? Description { get; set; }
        public double? Price { get; set; }
        public string? Image { get; set; }
        public string? TypeProduct { get; set; }
        public string? Link { get; set; }
        public string? IndentityANDROID { get; set; }
    }
}
