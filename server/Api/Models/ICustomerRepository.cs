namespace Api.Models
{
    public interface ICustomerRepository
    {
        Customer GetById(int customerId);

        void Add(Customer customer);
        void Update(Customer customer);
        void Delete(Customer customer);
        void SaveChanges();
    }
}
