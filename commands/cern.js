module.exports = 
{
    name: 'cern',
    description: "talks about cern",
    execute(message, args)
    {
        message.channel.send('İçerisine yüklü bir parçacık bıraktığında doğrusal hareket yaparak + veya - ye doğru yaklaşacaktır. Ancak manyetik alana bir hızla yüklü parçacık atar isen dairesel hareket yapar buda merkezkaç kuvvetinin, manyetik kuvete eşitlenmesinden kaynaklanır. mv^2/r=Bqv olduğundan r=mv/qB yarıçaplı bir dairesel hareket yapar.');
    }
}