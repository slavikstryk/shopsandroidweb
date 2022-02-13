using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShopsAndroidWeb.Data;
using ShopsAndroidWeb.Data.Entities;
using ShopsAndroidWeb.Models;

namespace ShopsAndroidWeb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StatementController : Controller
    {
        private readonly EFAppContext _context;

        public StatementController(EFAppContext context)
        {
            _context = context;
        }
        [HttpGet("all")]
        public async Task<IActionResult> GetAll()
        {
#pragma warning disable CS8604 // Possible null reference argument.
            List<Statement>? list = await _context.Statements.ToListAsync();
#pragma warning restore CS8604 // Possible null reference argument.
            return Ok(list);
        }

        [HttpGet("get/{id}")]
        public async Task<IActionResult> GetById(int id)
        {
#pragma warning disable CS8604 // Possible null reference argument.
            List<Statement>? list = await _context.Statements.ToListAsync();
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
        public async Task<IActionResult> AddStatement([FromBody] Statements model)
        {
            var statement = new Statement
            {
                FirstName = model.FirstName,
                LastName = model.LastName,
                PhoneNumber = model.PhoneNumber,
                EMail = model.EMail,
                Product = model.Product
            };
#pragma warning disable CS8602 // Dereference of a possibly null reference.
            await _context.Statements.AddAsync(statement);
#pragma warning restore CS8602 // Dereference of a possibly null reference.
            _context.SaveChanges();
            return Ok(statement.Id);
        }

        [HttpPut]
        [Route("update")]
        public async Task<IActionResult?> UpdateStatement([FromBody] Statement statement)
        {
#pragma warning disable CS8604 // Possible null reference argument.
            Statement? result = await _context.Statements.FirstOrDefaultAsync(e => e.Id == statement.Id);
#pragma warning restore CS8604 // Possible null reference argument.
            if (result != null)
            {
                result.FirstName = statement.FirstName;
                result.LastName = statement.LastName;
                result.PhoneNumber = statement.PhoneNumber;
                result.EMail = statement.EMail;
                result.Product = statement.Product;


                await _context.SaveChangesAsync();

                return Ok(result);
            }
            return null;
        }
        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> RemoveStatement(int id)
        {
            id--;
#pragma warning disable CS8604 // Possible null reference argument.
            List<Statement>? list = await _context.Statements.ToListAsync();
#pragma warning restore CS8604 // Possible null reference argument.
            int size = list.Count;
            if (id <= size)
            {
                var item_delete = list.ElementAt(id);
                _context.Statements.Remove(item_delete);
                _context.SaveChanges();
            }
            else
            {
                id = size--;
                var item_delete = list.ElementAt(id);
                _context.Statements.Remove(item_delete);
                _context.SaveChanges();
            }
            return Ok();
        }

    }
}
