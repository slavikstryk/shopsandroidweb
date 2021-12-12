using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopsAndroidWeb.Models
{
    public class ProductItemVM
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Image { get; set; }
        public string Link { get; set; }
    }
    public class ProductAddVM
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string TypeProduct { get; set; }
        public string Description { get; set; }
        public string Link { get; set; }
    }
}
