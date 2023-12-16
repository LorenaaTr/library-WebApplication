using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using Server.Context;
using Server.Models;

namespace Server.Controllers
{
    public class PartnersController : Controller
    {
        private readonly ApplicationDBContext _context;

        public PartnersController(ApplicationDBContext context)
        {
            _context = context;
        }

        // GET: Partners
        public async Task<IActionResult> Index()
        {
            return View(await _context.Partners.ToListAsync());
        }

        // GET: Partners/Details/5
        public async Task<IActionResult> Details(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var partners = await _context.Partners
                .FirstOrDefaultAsync(m => m.BussinessName == id);
            if (partners == null)
            {
                return NotFound();
            }

            return View(partners);
        }

        // GET: Partners/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: Partners/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("BussinessName,CeoName,City,State,Street,ZipCode")] Partners partners)
        {
            if (ModelState.IsValid)
            {
                _context.Add(partners);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(partners);
        }

        // GET: Partners/Edit/5
        public async Task<IActionResult> Edit(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var partners = await _context.Partners.FindAsync(id);
            if (partners == null)
            {
                return NotFound();
            }
            return View(partners);
        }

        // POST: Partners/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(string id, [Bind("BussinessName,CeoName,City,State,Street,ZipCode")] Partners partners)
        {
            if (id != partners.BussinessName)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(partners);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!PartnersExists(partners.BussinessName))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(partners);
        }

        // GET: Partners/Delete/5
        public async Task<IActionResult> Delete(string id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var partners = await _context.Partners
                .FirstOrDefaultAsync(m => m.BussinessName == id);
            if (partners == null)
            {
                return NotFound();
            }

            return View(partners);
        }

        // POST: Partners/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(string id)
        {
            var partners = await _context.Partners.FindAsync(id);
            if (partners != null)
            {
                _context.Partners.Remove(partners);
            }

            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool PartnersExists(string id)
        {
            return _context.Partners.Any(e => e.BussinessName == id);
        }
    }
}
