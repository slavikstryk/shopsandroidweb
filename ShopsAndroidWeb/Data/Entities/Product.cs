using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ShopsAndroidWeb.Data.Entities
{
    [Table("tblProducts")]
    public class Product
    {
        [Key]
        public int Id { get; set; }
        [Required, StringLength(255)]
        public string? Name { get; set; }
        public decimal? Price { get; set; }
        public string? Image { get; set; }
        public string? TypeProduct { get; set; }
        public string? Description { get; set; }
        public string? Link { get; set; }
        public string? IdentityANDROID { get; set; }
        public virtual ICollection<ProductImage>? ProductImages { get; set; }
    }
}
