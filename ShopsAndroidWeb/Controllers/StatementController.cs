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
            var list = await _context.Statements.ToListAsync();
            return Ok(list);
        }

        [HttpGet("get/{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var list = await _context.Statements.ToListAsync();
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
            await _context.Statements.AddAsync(statement);
            _context.SaveChanges();
            return Ok(statement.Id);
        }

        [HttpDelete]
        [Route("delete")]
        public async Task<IActionResult> RemoveStatement(int id)
        {
            id--;
            var list = await _context.Statements.ToListAsync();
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
