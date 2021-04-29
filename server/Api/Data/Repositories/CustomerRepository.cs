using Api.Models;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Api.Data.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly Context _context;
        private readonly DbSet<Customer> _customers;

        public CustomerRepository(Context dbContext)
        {
            _context = dbContext;
            _customers = dbContext.Customers;
        }

        public void Add(Customer customer)
        {
            _customers.Add(customer);
        }

        public void Delete(Customer customer)
        {
            _customers.Remove(customer);
        }

        public Customer GetById(int customerId)
        {
            return _customers.Include(x => x.Games).SingleOrDefault(x => x.CustomerId == customerId);
        }

        public void SaveChanges()
        {
            _context.SaveChanges();
        }

        public void Update(Customer customer)
        {
            _context.Update(customer);
        }
    }
}
