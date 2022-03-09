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
            List<Statement>? list = await _context.Statements.ToListAsync();
            return Ok(list);
        }

        [HttpGet("get/{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            List<Statement>? list = await _context.Statements.ToListAsync();
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
        public async Task<IActionResult> AddStatement([FromBody] Statement model)
        {
            var statement = new Statement
            {
                Id = _context.Statements.Count() + 1,
                FirstName = model.FirstName,
                LastName = model.LastName,
                PhoneNumber = model.PhoneNumber,
                EMail = model.EMail,
                Product = model.Product,
                Status = "На складі",
                Process = "ні"
            };
            await _context.Statements.AddAsync(statement);
            _context.SaveChanges();
            return Ok(statement.Id);
        }

        [HttpPut]
        [Route("update")]
        public async Task<IActionResult?> UpdateStatement([FromBody] Statement statement)
        {
            Statement? result = await _context.Statements.FirstOrDefaultAsync(e => e.Id == statement.Id);
            if (result != null)
            {
                result.FirstName = statement.FirstName;
                result.LastName = statement.LastName;
                result.PhoneNumber = statement.PhoneNumber;
                result.EMail = statement.EMail;
                result.Product = statement.Product;
                result.Status = statement.Status;
                result.Process = statement.Process;

                await _context.SaveChangesAsync();

                return Ok(result);
            }
            return null;
        }
        [HttpDelete]
        [Route("delete/{id}")]
        public async Task<IActionResult> RemoveStatement(int id)
        {
            id--;
            List<Statement>? list = await _context.Statements.ToListAsync();
            object res = "";
            int size = list.Count;
            if (size != 0)
            {
                if (id < size)
                {
                    var item_delete = list.ElementAt(id);
                    _context.Statements.Remove(item_delete);
                    _context.SaveChanges();
                    res = "Index updated";
                }
                else if (id >= size)
                {
                    id = size;
                    id--;
                    var item_delete = list.ElementAt(id);
                    _context.Statements.Remove(item_delete);
                    _context.SaveChanges();
                    res = "Index updated last item";
                }
            }
            else if (size <= 0)
            {
                res = "List is empty";
            }
            return Ok(res);
        }

        [HttpDelete]
        [Route("clear")]
        public async Task<IActionResult> ClearStatements()
        {
            object? res = "List is empty!";
            List<Statement> statements = await _context.Statements.ToListAsync();
            if (statements.Count != 0)
            {
                foreach (Statement item in statements)
                {
                    _context.Statements.Remove(item);
                    _context.SaveChanges();
                }
                res = "Cleared";
            }
            return Ok(res);
        }
    }
}
