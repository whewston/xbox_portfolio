using Microsoft.EntityFrameworkCore;
using PortfolioApi.Data;
using PortfolioApi.Models;

var builder = WebApplication.CreateBuilder(args);

// 1. Setup CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

// 2. Configure PostgreSQL connection
builder.Services.AddDbContext<PortfolioDb>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

var app = builder.Build();

// ==========================================
// NEW: AUTO-MIGRATE & SEED DATABASE ON STARTUP
// ==========================================
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<PortfolioDb>();
    // This executes your migrations and applies the HasData() seeds!
    db.Database.Migrate(); 
}

app.UseCors("AllowAll");

// --- HELPER: SECURITY CHECK ---
// Grabs the secret key from appsettings.json, falling back to a default if missing
var adminKey = builder.Configuration["AdminSecretKey"] ?? "MySuperSecretAdminPassword123!";

bool IsAuthorized(HttpContext context)
{
    var providedKey = context.Request.Headers["X-Admin-Key"].FirstOrDefault();
    return providedKey == adminKey;
}

// ==========================================
//                 GET ENDPOINTS 
// ==========================================

app.MapGet("/api/profile", async (PortfolioDb db) =>
{
    return await db.Profiles.FirstOrDefaultAsync();
});

app.MapGet("/api/experiences", async (PortfolioDb db) =>
{
    return await db.Experiences.OrderBy(e => e.Id).ToListAsync();
});

app.MapGet("/api/skills", async (PortfolioDb db) =>
{
    return await db.Skills.OrderBy(s => s.Id).ToListAsync();
});

app.MapGet("/api/learnmore", async (PortfolioDb db) =>
{
    return await db.LearnMores.OrderBy(l => l.Id).ToListAsync();
});

app.MapGet("/api/interests", async (PortfolioDb db) =>
{
    return await db.Interests.OrderBy(i => i.Id).ToListAsync();
});

// ==========================================
//                POST ENDPOINTS 
// ==========================================

// PROFILE: Updates the existing profile (or creates one if empty)
app.MapPost("/api/profile", async (Profile updatedProfile, PortfolioDb db, HttpContext context) =>
{
    if (!IsAuthorized(context)) return Results.Unauthorized();

    var existingProfile = await db.Profiles.FirstOrDefaultAsync();
    
    if (existingProfile != null)
    {
        // Update existing fields
        existingProfile.Name = updatedProfile.Name;
        existingProfile.Gamerscore = updatedProfile.Gamerscore;
        existingProfile.Zone = updatedProfile.Zone;
        existingProfile.Location = updatedProfile.Location;
        existingProfile.JoinDate = updatedProfile.JoinDate;
        existingProfile.Bio = updatedProfile.Bio;
    }
    else
    {
        db.Profiles.Add(updatedProfile);
    }

    await db.SaveChangesAsync();
    return Results.Ok(existingProfile ?? updatedProfile);
});

// EXPERIENCES
app.MapPost("/api/experiences", async (Experience newExp, PortfolioDb db, HttpContext context) =>
{
    if (!IsAuthorized(context)) return Results.Unauthorized();

    db.Experiences.Add(newExp);
    await db.SaveChangesAsync();
    return Results.Created($"/api/experiences/{newExp.Id}", newExp);
});

// SKILLS
app.MapPost("/api/skills", async (Skill newSkill, PortfolioDb db, HttpContext context) =>
{
    if (!IsAuthorized(context)) return Results.Unauthorized();

    db.Skills.Add(newSkill);
    await db.SaveChangesAsync();
    return Results.Created($"/api/skills/{newSkill.Id}", newSkill);
});

// LEARN MORE
app.MapPost("/api/learnmore", async (LearnMore newLearn, PortfolioDb db, HttpContext context) =>
{
    if (!IsAuthorized(context)) return Results.Unauthorized();

    db.LearnMores.Add(newLearn);
    await db.SaveChangesAsync();
    return Results.Created($"/api/learnmore/{newLearn.Id}", newLearn);
});

// INTERESTS
app.MapPost("/api/interests", async (Interest newInterest, PortfolioDb db, HttpContext context) =>
{
    if (!IsAuthorized(context)) return Results.Unauthorized();

    db.Interests.Add(newInterest);
    await db.SaveChangesAsync();
    return Results.Created($"/api/interests/{newInterest.Id}", newInterest);
});

app.Run();