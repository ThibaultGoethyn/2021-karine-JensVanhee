namespace Api.Models
{
    public interface ICustomerRepository
    {
        Customer GetByEmail(string email);

        void Add(Customer customer);
        void Update(Customer customer);
        void SaveChanges();
    }
}
