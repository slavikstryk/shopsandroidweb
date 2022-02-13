using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShopsAndroidWeb.Data;
using ShopsAndroidWeb.Data.Entities;

namespace ShopsAndroidWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeliveredProductsController : Controller
    {
        private readonly EFAppContext _context;

        public DeliveredProductsController(EFAppContext context)
        {
            _context = context;
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAll()
        {
#pragma warning disable CS8604 // Possible null reference argument.
            List<DeliveredProducts>? list = await _context.DeliveredProducts.ToListAsync();
#pragma warning restore CS8604 // Possible null reference argument.
            return Ok(list);
        }

        [HttpGet("get/{id}")]
        public async Task<IActionResult> GetById(int id)
        {
#pragma warning disable CS8604 // Possible null reference argument.
            var list = await _context.DeliveredProducts.ToListAsync();
#pragma warning restore CS8604 // Possible null reference argument.
            if (id < list.Count && id >= -1)
            {
                var item_find = list.ElementAt(id);
                return Ok(item_find);
            }
            else
            {
                var item_find = list.Last();
                return Ok(item_find);
            }
        }

        [HttpPost]
        [Route("post")]
        public async Task<IActionResult> AddDelivered([FromBody] DeliveredProducts model)
        {
            var delivered = new DeliveredProducts
            {
#pragma warning disable CS8604 // Possible null reference argument.
                Id = _context.DeliveredProducts.Count()+1,
#pragma warning restore CS8604 // Possible null reference argument.
                ProductName = model.ProductName,
                BuyersLastName = model.BuyersLastName,
                ProductPrice = model.ProductPrice,
                BuyersName = model.BuyersName,
                BuyersPhone = model.BuyersPhone,
                BuyersEmail = model.BuyersEmail,
                DeliveryAdress = model.DeliveryAdress,
                Status = model.Status
            };
            await _context.DeliveredProducts.AddAsync(delivered);
            _context.SaveChanges();
            return Ok(delivered.Id);
        }
        [HttpPut]
        [Route("update")]
        public async Task<IActionResult?> UpdateDelivered([FromBody] DeliveredProducts delivered)
        {
#pragma warning disable CS8604 // Possible null reference argument.
            var result = await _context.DeliveredProducts.FirstOrDefaultAsync(e => e.Id == delivered.Id);
#pragma warning restore CS8604 // Possible null reference argument.
            if (result != null)
            {
                result.ProductName = delivered.ProductName;
                result.BuyersLastName = delivered.BuyersLastName;
                result.ProductPrice = delivered.ProductPrice;
                result.BuyersName = delivered.BuyersName;
                result.BuyersEmail = delivered.BuyersEmail;
                result.BuyersPhone = delivered.BuyersPhone;
                result.Status = delivered.Status;
                result.DeliveryAdress = delivered.DeliveryAdress;

                await _context.SaveChangesAsync();

                return Ok(result);
            }
            return null;
        }

        [HttpDelete]
        [Route("delete/{id}")]
        public IActionResult RemoveDelivered(int id)
        {
#pragma warning disable CS8604 // Possible null reference argument.
            List<DeliveredProducts> list = _context.DeliveredProducts.ToList();
#pragma warning restore CS8604 // Possible null reference argument.
            object? res = "Item not found";

            foreach (DeliveredProducts dto in list)
            {
                if (dto.Id == id)
                {
                    _context.DeliveredProducts.Remove(dto);
                    _context.SaveChanges();
                    res = "Successfully";
                }
            }

            return Ok(res);
        }

    }
}
