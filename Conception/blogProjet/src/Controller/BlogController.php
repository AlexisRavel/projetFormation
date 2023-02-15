<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class BlogController extends AbstractController
{
    #[Route('/', name: 'app_index')]
    public function index(ArticleRepository $artRepo): Response {
        $articles = $artRepo->findAll();
        return $this->render('blog/index.html.twig', [
            'articles' => $articles,
        ]);
    }

    #[Route('/admin', name: 'app_admin')]
    public function admin(): JsonResponse {
        return $this->json(['username' => 'jane.doe']);
    }

    #[Route('/login', name: 'app_login')]
    public function login(): JsonResponse {
        return $this->json(['user' => null]);
    }

    #[Route('/connexion', name: 'app_connect')]
    public function connect(Request $req, UserRepository $userRepo, UserPasswordHasherInterface $passwordHasher): JsonResponse {
        $data = json_decode($req->getContent(), true);
        $user = $userRepo->findOneBy(["username" => [$data["login"]]]);
        if($user && $user->getPassword() == $passwordHasher->isPasswordValid($user, $data["mdp"])) {
            return $this->json($user);
        }
        return $this->json(["validation"=> false]);
    }
}
